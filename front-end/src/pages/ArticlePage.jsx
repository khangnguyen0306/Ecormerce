import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Share2, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const ArticlePage = ({ articles }) => {
  console.log(articles)
  const { articleId } = useParams();
  console.log(articleId)
  const navigate = useNavigate();
  const { toast } = useToast();
  const article = articles?.find(a => a.id == articleId);

  useEffect(() => {
    if (!article) {
      navigate('/404'); 
    }
  }, [article, navigate]);

  if (!article) {
    return null; 
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: `Xem bài viết "${article.title}" trên BeautyGlow Blog!`,
        url: window.location.href,
      })
      .then(() => toast({ title: "Đã chia sẻ bài viết!" }))
      .catch((error) => console.error('Lỗi chia sẻ:', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: "Đã sao chép liên kết bài viết!" });
    }
  };

  const handlePrint = () => {
    window.print();
  };
  
  const htmlContent = article.content;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-cream-50 py-12 md:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-xl border border-gold-100">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Link to="/blog" className="flex items-center text-gold-600 hover:text-gold-700 transition-colors group text-sm font-medium">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Quay lại Blog
          </Link>
        </motion.div>

        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-center"
        >
          <div className="mb-3">
            <span className="text-sm bg-gold-100 text-gold-700 px-3 py-1 rounded-full font-medium font-montserrat tracking-wider">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-cormorant text-neutral-800 mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center justify-center text-xs md:text-sm text-neutral-500 font-montserrat space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1.5 text-gold-500" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1.5 text-gold-500" />
              <span>{formatDate(article.date)}</span>
            </div>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg mb-10"
        >
          <img 
            alt={article.title}
            className="w-full h-full object-cover"
           src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
        </motion.div>

        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="prose-styles max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        >
        </motion.article>

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gold-200/70 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center space-x-2">
            <Tag className="h-5 w-5 text-gold-500" />
            <span className="text-sm text-neutral-600 font-medium">Tags:</span>
            <span className="text-sm bg-gold-100/70 text-gold-700 px-2 py-0.5 rounded-full cursor-pointer hover:bg-gold-200/70">
              {article.category}
            </span>
            <span className="text-sm bg-gold-100/70 text-gold-700 px-2 py-0.5 rounded-full cursor-pointer hover:bg-gold-200/70">
              Làm Đẹp
            </span>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={handleShare} className="border-gold-300 text-gold-600 hover:bg-gold-50/50 hover:text-gold-700">
              <Share2 className="mr-2 h-4 w-4" /> Chia sẻ
            </Button>
            <Button variant="outline" size="sm" onClick={handlePrint} className="border-gold-300 text-gold-600 hover:bg-gold-50/50 hover:text-gold-700">
              <Printer className="mr-2 h-4 w-4" /> In bài viết
            </Button>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default ArticlePage;
const publicRuntimeConfig = {
    BE_API_LOCAL: import.meta.env.VITE_API_URL,
};

export const { BE_API_LOCAL } = publicRuntimeConfig;
export default publicRuntimeConfig;

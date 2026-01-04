import type { ComponentProps } from 'react'

interface SafeImageProps extends ComponentProps<'img'> {
    src: string
    alt: string // Alt is mandatory for SEO
    loading?: 'lazy' | 'eager'
}

/**
 * A reusable image component that enforces SEO best practices.
 * It requires an 'alt' prop and defaults to lazy loading.
 */
export const SafeImage = ({ src, alt, loading = 'lazy', className, ...props }: SafeImageProps) => {
    return (
        <img
            src={src}
            alt={alt}
            loading={loading}
            className={className}
            decoding="async"
            {...props}
        />
    )
}

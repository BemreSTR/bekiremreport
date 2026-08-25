import { useState, type ComponentProps } from 'react'

interface SafeImageProps extends ComponentProps<'img'> {
    src: string
    alt: string // Alt is mandatory for SEO
    loading?: 'lazy' | 'eager'
}

/**
 * A reusable image component that enforces SEO best practices.
 * It requires an 'alt' prop, defaults to lazy loading, and provides graceful error fallbacks.
 */
export const SafeImage = ({ src, alt, loading = 'lazy', className, onError, ...props }: SafeImageProps) => {
    const [hasError, setHasError] = useState(false)

    if (hasError) {
        return (
            <div
                className={`flex items-center justify-center bg-slate-800/50 border border-white/10 text-slate-400 text-xs font-medium rounded-lg p-4 ${className ?? ''}`}
                title={alt}
            >
                <span>{alt || 'Image unavailable'}</span>
            </div>
        )
    }

    return (
        <img
            src={src}
            alt={alt}
            loading={loading}
            className={className}
            decoding="async"
            onError={(e) => {
                setHasError(true)
                if (onError) onError(e)
            }}
            {...props}
        />
    )
}

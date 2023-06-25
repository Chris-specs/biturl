// Utils
import { cn } from '@/utils/style'

export default function Button({
    children,
    className,
    ...props
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={cn(
                'bg-yellow-400/90 text-black font-medium rounded-lg px-6 py-2 transition-all',
                'hover:bg-yellow-400',
                'disabled:opacity-50 disabled:hover:bg-yellow-400/90 disabled:cursor-not-allowed',
                className
            )}
        >{ children }</button>
    )
}

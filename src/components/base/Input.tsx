// Utils
import { cn } from '@/utils/style'

export default function Input({
    className,
    ...props
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return (
        <input
            {...props}
            className={cn(
                'w-full px-4 py-2 rounded-lg transition-all outline-none',
                'hover:ring-4',
                'focus:ring-4',
                className
            )}
        />
    )
}

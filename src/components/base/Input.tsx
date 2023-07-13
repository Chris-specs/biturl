// Utils
import { cn } from '@/utils/helpers/style'

export default function Input({
    className,
    ...props
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return (
        <input
            {...props}
            className={cn(
                'w-full bg-transparent border border-sky-400/20 rounded-lg px-4 py-2 transition-all outline-none',
                'placeholder:text-slate-600',
                'hover:ring-4 hover:ring-sky-400/20',
                'focus:ring-4 focus:ring-sky-400/20 focus:border-sky-400/60',
                className
            )}
        />
    )
}

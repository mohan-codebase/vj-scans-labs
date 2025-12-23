import { SpecialitiesNav } from '@/components/layout/SpecialitiesNav';

export default function SpecialitiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <SpecialitiesNav />
            {children}
        </>
    );
}

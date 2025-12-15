export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            My Logo
            {children}
            footer @123
        </section>
    );
}
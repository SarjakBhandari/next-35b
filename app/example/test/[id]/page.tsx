export default async function Page({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div>Test ID : {id}</div>
    );
}
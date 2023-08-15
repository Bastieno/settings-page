export function DummyContent({ text }: { text: string }) {
  return (
    <main className='flex min-h-[calc(100vh-4rem)] flex-1 items-center justify-center lg:min-h-screen'>
      <h1 className='text-xl font-semibold leading-7 text-gray-600'>{text}</h1>
    </main>
  );
}

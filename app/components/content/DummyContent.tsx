export function DummyContent({ text }: { text: string }) {
  return (
    <main className='flex flex-1 justify-center items-center min-h-[calc(100vh-4rem)] lg:min-h-screen'>
      <h1 className='text-xl font-semibold leading-7 text-gray-600'>
        {text}
      </h1>
    </main>
  );
}

import AddCompanyButton from '@components/Company/AddCompanyButton';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-lvh flex-col">
      <h1 className="mb-8 text-xl">HOME PAGE</h1>
      <AddCompanyButton></AddCompanyButton>
    </main>
  );
}

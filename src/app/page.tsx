import ConfirmAlert from "@/components/Alert/ConfirmAlert";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
      <ConfirmAlert
        heading="Bloquer la carte?"
        content="Bloquez cette carte pour la geler et empecher les debits inatendus des plateformes en ligne. Cette opération est reversible"
        btnText="Bloquer"
      />
    </main>
  );
}

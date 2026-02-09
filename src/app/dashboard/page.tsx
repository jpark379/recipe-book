function Header({ title }) {
  return <h1>{title ? title : 'Change title'}</h1>
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="dashboard" />
    </div>
  );
}

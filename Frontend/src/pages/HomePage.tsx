import NavbarMenu from "../components/navbar/NavbarMenu";
import Header from "../components/home/Header";

export default function HomePage() {
  const access_token = sessionStorage.getItem("access_token") ?? null;
  console.log(`Bearer ${access_token}`);

  return (
    <>
      <NavbarMenu />
      <Header />
    </>
  );
}

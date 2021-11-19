
import CustomHead from "./CustomHead";
import Footer from "../sections/Footer";

/** Дефолтное расположение эементов */
export default function DefaultLayout({
  title = "Segway",
  description = "Описание",
  children,
} = {}) {
  return (
    <>
      <CustomHead description={description} title={title} />
      {children}
      <Footer />
    </>
  );
}

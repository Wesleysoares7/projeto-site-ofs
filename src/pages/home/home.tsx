import Navbar from "../../components/navbar/navbar";
import Tau from "../../assets/tau.png";
import Footer from "../../components/footer/footer";
import ButtonPrimary from "../../components/buttonPrimary/buttonPrimary";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Seção de Destaque */}
      <div
        className="relative h-screen bg-cover bg-center flex flex-col justify-between"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      >
        {/* Sobreposição de fundo escuro */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Conteúdo principal */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 gap-3">
          <div className="w-1/2">
            <img
              src={Tau}
              alt="Tau franciscano com Jesus cruscificado e São Francisco"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Bem-vindo à Fraternidade São Sebastião
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Vivendo o Evangelho à luz de São Francisco e Santa Clara
          </p>
          <ButtonPrimary className="p-4">Saiba Mais</ButtonPrimary>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

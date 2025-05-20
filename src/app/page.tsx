import Navbar from "@/components/Navbar";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from 'next/image'


export default function Home() {
  return (
    <>
<main className="min-h-screen bg-[#480f10] relative">
  <Navbar />
 <div className="flex justify-center items-center w-full h-screen">
  <img src="/Background.png" alt="" className="sm:w-md md:w-lg lg:w-xl xl:w-2xl 2xl:w-4xl"/>
</div>
</main>
    <section className="bg-white w-full min-h-[100dvh] flex flex-col items-center justify-center px-4 py-10">
  <h2 className="text-[#480f10] text-sm mb-6 font-semibold">
    CONHEÇA A ADVOGADA
  </h2>

  <div className="bg-[#480f10] w-full max-w-[1200px] rounded-2xl flex flex-col md:flex-row justify-center items-center p-5 gap-5 transition-all duration-300">
    {/* IMAGEM */}
    <div className="bg-white w-full md:w-[45%] aspect-[4/5] md:aspect-auto rounded-xl flex justify-center items-center overflow-hidden min-h-[300px]">
      <img
        src="/PPerfil.jpg"
        alt="Perfil"
        className="w-full h-full object-cover"
      />
    </div>

    {/* TEXTO */}
    <div className="w-full md:w-[55%] flex flex-col justify-between text-justify px-2 md:px-5 pt-5 gap-5 text-white">
      <div>
        <h1 className="text-xl md:text-2xl text-[#c5972c] font-bold">
          Ana Claudia Martins
        </h1>
        <p className="text-sm md:text-base text-white">OAB/MS nº 123.123</p>
        <div className="h-px w-9/12 bg-[#c5972c] my-4" />
        <p className="text-sm md:text-base leading-relaxed">
          Sou Ana Cláudia Martins da Silva, advogada inscrita na OAB/MS sob o nº 30.838, formada em Direito pela Faculdade Anhanguera e pós-graduada em Direito Penal e Processo Penal.
 <br /><br />
Minha trajetória na advocacia é guiada por valores sólidos como ética, responsabilidade e comprometimento com o ser humano. Acredito que o Direito é uma ferramenta essencial para garantir dignidade, justiça e segurança às pessoas, por isso me dedico a oferecer um atendimento jurídico humanizado, transparente e estrategicamente eficaz.
 <br /><br />
Com atuação sólida e multidisciplinar, presto assessoria e representação em diversas áreas do Direito, sempre com foco na excelência técnica, na escuta atenta ao cliente e na busca por soluções justas e personalizadas. Seja na defesa de direitos, na orientação preventiva ou no enfrentamento de conflitos complexos, meu objetivo é representar cada cliente com integridade, profissionalismo e dedicação total à sua causa.
        </p>
      </div>

      <button className="bg-white hover:bg-[#c5972c] hover:text-white text-[#592526] font-bold py-2 px-6 w-full rounded-xl text-sm md:text-base">
        Solicite um Atendimento Jurídico
      </button>
    </div>
  </div>
</section>

      <section className=" w-full min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-[#411417]">
        <div className="flex flex-wrap justify-center gap-5 mb-6 object-cover z-10">
          <div className="bg-white p-6 rounded-xl shadow-md xl:w-[500px] 2xl:w-[700] xl:h-[150px] 2xl:h-[200px] px-30 flex flex-col items-center">
            <img src="/missao.png" alt="" className=" h-7" />
            <h3 className="font-bold text-center mb-2 text-[#411417]">
              Missão
            </h3>
            <p className="text-center text-sm text-[#c69535]">
              Oferecer assessoria jurídica de excelência para meus clientes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md xl:w-[500px] 2xl:w-[700] xl:h-[150px] 2xl:h-[200px] px-30 flex flex-col items-center">
            <img src="/valor.png" alt="" className="h-7" />
            <h3 className="font-bold text-center mb-2 text-[#411417]">
              Valores
            </h3>
            <p className="text-center text-sm text-[#c69535]">
              Comprometimento, ética, inovação, transparência e responsabilidade
              social.
            </p>
          </div>
        </div>

        <h1 className="text-white text-2xl font-bold mb-6 object-cover z-10">
          Áreas de atuação
        </h1>

        <div className="flex flex-wrap justify-center gap-2 object-cover z-10">
          <div className="bg-white p-6 rounded-xl shadow-md xl:w-[250px] 2xl:w-[350px] xl:h-[300px] flex flex-col items-center">
            <img src="/direito-penal.png" alt="" className="h-7" />
            <h3 className="font-bold text-center mb-2 text-[#411417]">
              Direito Criminal
            </h3>
            <p className="text-center text-sm text-[#c69535] text-justify xl:px-5 2xl:px-16">
              Atuação estratégica em investigações e processos criminais, com defesa técnica em todas as fases — incluindo acompanhamento em delegacias, audiências e tribunais. Ofereço também orientação jurídica preventiva em casos envolvendo crimes diversos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md xl:w-[250px] 2xl:w-[350px] h-auto flex flex-col items-center ">
            <img src="/plano-de-aposentadoria.png" alt="" className="h-7" />
            <h3 className="font-bold text-center mb-2 text-[#411417]">
              Direito Previdenciário
            </h3>
            <p className="text-center text-sm text-[#c69535] text-justify xl:px-5 2xl:px-16">
              Atendimento especializado em aposentadorias, pensões, auxílios, revisões de benefícios e demais demandas junto ao INSS, com foco em garantir os direitos previdenciários dos segurados com agilidade e segurança.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md xl:w-[250px] 2xl:w-[350px] h-auto flex flex-col items-center px-10">
            <img src="/justica.png" alt="" className="h-7" />
            <h3 className="font-bold text-center mb-2 text-[#411417]">
              Direito Civil
            </h3>
            <p className="text-center text-sm text-[#c69535] text-justify xl:px-3 2xl:px-16">
              Atuação em questões do dia a dia, como elaboração e revisão de contratos, ações de cobrança, responsabilidade civil, indenizações e demais demandas cíveis que envolvem os direitos e deveres nas relações particulares.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md xl:w-[250px] 2xl:w-[350px] h-auto flex flex-col items-center px-10">
            <img src="/lei-trabalhista.png" alt="" className="h-7" />
            <h3 className="font-bold text-center mb-2 text-[#411417]">
              Direito do Trabalho
            </h3>
            <p className="text-center text-sm text-[#c69535] text-justify xl:px-5 2xl:px-16">
              Representação em ações trabalhistas envolvendo verbas rescisórias, reconhecimento de vínculo, horas extras, indenizações por danos morais e materiais, entre outros direitos do trabalhador, sempre com foco na justiça e valorização do trabalho digno.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f0] w-full min-h-100 flex flex-col items-start md:items-center justify-center px-4">
  {/* Título no topo só no desktop */}
  <h1 className="text-[#411417] hidden md:block">Outras formas de contato</h1>

  <div className="flex flex-col md:flex-row-reverse gap-10 w-full md:items-center">
    {/* Logo */}
    <img
      src="/LogoL.png"
      alt="Logo"
      className="md:w-80 w-56 h-auto order-1 md:order-1 self-center md:self-auto"
    />

    {/* Título no mobile */}
    <h2 className="text-[#411417] text-sm font-semibold md:hidden order-2">
      Outras formas de contato
    </h2>

    {/* Informações de contato */}
    <div className="xl:w-sm 2xl:w-md flex flex-col justify-center order-3 md:order-2 text-left">
      <div className="flex items-center gap-2">
        <img src="/instagram.png" alt="Instagram" className="w-5 h-5" />
        <h1 className="text-[#411417] md:text-2xl text-[12px]">@Ana_Claudia_Martins</h1>
      </div>
      <div className="flex items-center gap-2">
        <img src="/o-email.png" alt="Email" className="w-5 h-5" />
        <h1 className="text-[#411417] md:text-2xl text-[12px]">anaclaudiamartins@gmail.com</h1>
      </div>
      <div className="flex items-center gap-2">
        <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
        <h1 className="text-[#411417] md:text-2xl text-[12px]">(67) 9 9999-9999</h1>
      </div>
    </div>
  </div>
</section>
 <footer className="md:w-full h-full bg-[#c5972c] text-white text-center">
        <p className="text-[10px]">
          &copy; 2025. Todos os Direitos Reservados. Ana Claudia Martins
          Advogada. Desenvolvido por Vinicius Martins
        </p>
      </footer>

{/* <section className="bg-[#f2f2f0] w-full min-h-100  flex flex-col items-center justify-center">
        <h1 className="text-[#411417] text-xs md:text-base mb-10 md:mb-0">Outras formas de contato</h1>
        <div className=" flex flex-row gap-10">
          <div className="xl:w-sm 2xl:w-md  flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <img src="/instagram.png" alt="" className="w-5 h-5" />
              <h1 className="text-[#411417] text-[10px] md:text-base">@Ana_Claudia_Martins</h1>
            </div>
            <div className="flex items-center gap-2">
              <img src="/o-email.png" alt="" className="w-5 h-5" />
              <h1 className="text-[#411417] text-[10px] md:text-base">anaclaudiamartins@gmail.com</h1>
            </div>
            <div className="flex items-center gap-2">
              <img src="/whatsapp.png" alt="" className="w-5 h-5" />
              <h1 className="text-[#411417] text-[10px] md:text-base">(67) 9 9999-9999</h1>
            </div>
          </div>
          <img src="/LogoL.png" alt="" className=" w-40 h-auto md:w-80 md:h-auto" />
        </div>
      </section> 


      <footer className="md:w-full h-full bg-[#c5972c] text-white text-center">
        <p className="text-[10px]">
          &copy; 2025. Todos os Direitos Reservados. Ana Claudia Martins
          Advogada. Desenvolvido por Vinicius Martins
        </p>
      </footer> */}
    </>
  );
}

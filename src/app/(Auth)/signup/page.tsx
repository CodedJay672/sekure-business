import SignupForm from "@/components/Forms/SignupForm";
import Image from "next/image";

const Signup = () => {
  return (
    <section className='h-screen w-screen flex'>
      <div className="flex-1">
        <div className="h-full w-full bg-cover relative bg-no-repeat bg-center bg-[url(/assets/coworking.jpg)]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
          <div className="absolute md:p-20 lg:px-36 lg:pr-44 h-full hidden md:flex justify-between flex-col z-50">
            <div className="flex">
              <Image
                src="/assets/sekure.png"
                alt="sekure business"
                width={200}
                height={30}
                className="object-contain mr-3"
                />
              <div className="flex-center px-4 py-2 bg-primary rounded-[6px]">
                <h1 className="text-white font-bold text-[20px] leading-[22.19px]">Business</h1>
              </div>
            </div>
            <p className="text-white font-semibold text-[22px]">
            Personne ne gère mieux que nous le traitement des paiements, ce qui fait de votre compte <span className="text-primary font-bold">Sekure Business</span> le moyen le plus rapide, le plus intelligent et le plus sûr de recevoir des paiements en ligne.
            <br />

            <span className="text-[14px] font-light">
              Construit pour l'Afrique, <span className="font-bold">Sekure Business</span>
            </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full overflow-y-hidden relative md:w-[490px] bg-white bg-no-repeat bg-right-top ">
        <div className="h-full px-8 pt-8 pb-12 md:px-16 md:pt-2 md:pb-12 overflow-x-hiddden overflow-y-scroll">
          <div className="flex gap-2 mt-10 mb-4">
            <span className="w-6 h-6 rounded-full bg-primary"/><span className="w-6 h-6 rounded-full bg-notif"/>
          </div>
          <SignupForm />
        </div>
      </div>
    </section>
  )
}

export default Signup;

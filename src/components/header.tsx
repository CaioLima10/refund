import LogoRefund from "../assets/logo.svg"
import LogoutUser from "../assets/logout.svg"

export function Header() {
  return(
    <header className="w-full flex justify-between ">

      <img src={LogoRefund} alt="logo-refund" />

      <div className="flex items-center justify-center gap-4">
        <span className="text-sm font-semibold">
          Olá, Rodrigo
        </span>
        <img className="cursor-pointer hover:opacity-70" 
          src={LogoutUser} alt="logout-refund" 
        />
      </div>
    </header>
  )
}
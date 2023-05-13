import { Icon24Hours } from "@tabler/icons-react"

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-black text-white text-xl
    `}
    >
      <Icon24Hours size={50} strokeWidth={2} />
      <span>Fundamentos</span>
    </div>
  )
}

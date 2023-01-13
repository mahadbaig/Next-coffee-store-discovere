import { useRouter } from "next/router" 

export default function Coffee(){

    const router = useRouter()

    return (
        <div>{router.query.id}</div>
    )
}
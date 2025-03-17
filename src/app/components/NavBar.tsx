import Link from "next/link";

export default function NavBar() {
    return (
        <div>
            <div className="flex justify-between text-center items-center border-b border-gray-500">
                <div>

                </div>
                <div className="text-2xl text-center">
                    <Link href="/">Portfolio</Link>
                </div>
                <div className="flex gap-4 text-center p-5 ">
                    <div>
                        <Link href="/projects">Projects</Link>
                    </div>
                    <div className="">
                        <Link href="/contact" className="" >Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
export default function Experiences() {
    return(
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center p-5">Experiencias</h1>
            <div className="flex justify-center items-center">
                <div className="flex flex-col md:flex-row gap-5 w-full max-w-3xl">
                    <Card className="w-full md:w-96">
                        <CardHeader>
                            <CardTitle>Digital Marketing Specialist</CardTitle>
                            <CardDescription>Xiamen Aecoauto Technology Co</CardDescription>
                        </CardHeader>
                        <CardContent>
                            
                        </CardContent>
                        <CardFooter>
                            <p className="font-light">Xiamen, Fujian, China dic. 2023 - mar. 2024</p>
                        </CardFooter>
                    </Card>
                    <Card className="w-full md:w-96">
                        <CardHeader>
                            <CardTitle>TI Developer</CardTitle>
                            <CardDescription>Voltera Chile</CardDescription>
                        </CardHeader>
                        <CardContent>
                            
                        </CardContent>
                        <CardFooter>
                            <p className="font-light">Santiago, Chile dic. 2021 - feb. 2022</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
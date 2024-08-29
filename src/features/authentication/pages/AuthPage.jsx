
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

function AuthPage() {
    return (
        <div className="flex justify-center lg:w-full">
            <Card className="mt-56 p-3 shadow-lg">
                <Tabs defaultValue="account" className="xl:w-[400px] md:w-[350px] sm:w-[250px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account" className="px-2">Sign In</TabsTrigger>
                        <TabsTrigger value="password" className="px-2">Resgister</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card>
                            <CardHeader>
                                <CardTitle>Sign In</CardTitle>
                                <CardDescription>
                                    Login here if you have account. Click login when you're done.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="login_email">Email</Label>
                                    <Input id="login_email" type="email" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="login_password">Password</Label>
                                    <Input id="login_password" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button className="lg:w-full md:w-[200px]">Login</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                        <Card>
                            <CardHeader>
                                <CardTitle>Register</CardTitle>
                                <CardDescription>
                                    Register your account. After register, you'll be Sign in.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="register_Email">Email</Label>
                                    <Input id="register_Email" type="email" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="register_password">Password</Label>
                                    <Input id="register_password" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="confirm password">Confirm Password</Label>
                                    <Input id="confirm password" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button className="lg:w-full md:w-[200px]">register</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </Card>
        </div>
    )
}
export default AuthPage
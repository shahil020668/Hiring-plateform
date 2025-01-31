import React, { useState } from 'react'
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"
import { Link } from 'react-router-dom'

function LoginSheet() {
  const [buttonColor, setButtonColor] = useState('#1D4ED8');

return (
    <Sheet>
        <SheetTrigger asChild>
            <Button
                variant="outline"
                style={{ backgroundColor: buttonColor, color: 'white' }}
                onMouseOver={() => setButtonColor('#00008B')}
                onMouseOut={() => setButtonColor('#1D4ED8')}
            >
                Log in
            </Button>
        </SheetTrigger>

        <SheetContent>
            <SheetHeader>
                <SheetTitle>Log In</SheetTitle>
                <SheetDescription>
                    Please enter your login details below.
                </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                        Email
                    </Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="col-span-3 focus:outline-none" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">
                        Password
                    </Label>
                    <Input id="password" type="password" placeholder="Enter your password" className="col-span-3" />
                </div>
            </div>
            <SheetFooter className="flex-col block">
                <div className="my-3 text-center">
                    <span>Don't have an account? </span>
                    <SheetClose asChild>
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Register here
                        </Link>
                    </SheetClose>
                </div>
                <SheetClose asChild>
                    <Button type="submit" style={{ backgroundColor: '#1D4ED8', color: 'white' }} className=" right-6 fixed">
                        Log In
                    </Button>
                </SheetClose>
            </SheetFooter>
        </SheetContent>
    </Sheet>
)
}

export default LoginSheet
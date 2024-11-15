import { Link,useNavigate} from "react-router-dom"; // Import Link from react-router-dom
import { Button } from "@/components/ui/button";
import React, { useRef,useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/utils/AuthContext"; 

export default function Signup() {
  const registerForm = useRef(null); 
  const { user,registerUser } = useAuth(); 
  const nav = useNavigate();
  useEffect(() => {
    if (user) {
      nav('/');
    }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = registerForm.current.name.value;
    const email = registerForm.current.email.value;
    const password1 = registerForm.current.password1.value;
    const password2 = registerForm.current.password2.value;

    if (password1 !== password2) {
      alert("Passwords did not match!");
      return;
    }


    const userInfo = { name, email, password1 };

    registerUser(userInfo);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={registerForm} onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="m@example.com" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password1">Password</Label>
              <Input id="password1" name="password1" type="password" required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password2">Re-enter Password</Label>
              <Input id="password2" name="password2" type="password" required />
            </div>

            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

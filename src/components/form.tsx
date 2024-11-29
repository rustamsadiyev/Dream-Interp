import { Label } from "./ui/form";
import { Input } from "./ui/input";
import { z, ZodType } from "zod";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  Name: string;
  age: number;
  password: string;
  confirmPassword: string;
};

export default function Form() {
  const schema: ZodType<FormData> = z
    .object({
      Name: z.string().min(2).max(20),
      age: z.number().min(1).max(2),
      password: z.string().min(5).max(20),
      confirmPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log("Form Submitted: ", data);  
  };

  return (
    <>
      <div className="h-screen bg-gradient-to-r from-green-500 via-blue-500 to-orange-500">
        <div>
          <form onSubmit={handleSubmit(submitData)}>
            <div className="flex justify-center items-center h-screen">
              <div className="w-[50vh] text-white">
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Login</h1>
                </div>

                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" {...register("Name")} />
                {errors.Name && <p className="text-red-500">{errors.Name.message}</p>}

                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  {...register("age", {
                    setValueAs: (value) => (value ? Number(value) : 0),
                  })}
                />
                {errors.age && <p className="text-red-500">{errors.age.message}</p>}

                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" {...register("password")} />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" {...register("confirmPassword")} />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

                <div className="text-center">
                  <Button className="mt-4" size={"xl"} variant={"default"}>
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

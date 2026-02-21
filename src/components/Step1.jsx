
import React from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; 

export const Step1 = ({ nextStep,updateData,savedData }) => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    defaultValues: savedData
  });

  const onSubmit = (data) => {
    console.log(data);
    updateData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <Card className="max-w-lg mx-auto shadow-xl border-none ring-1 ring-slate-200">
        <CardHeader className="space-y-1">
          <p className="text-sm font-medium text-slate-600 uppercase tracking-wider">Step 1/3</p>
          <CardTitle className="text-2xl font-bold">Personal Information</CardTitle>
          <p className="text-slate-500 text-sm">Please provide your basic details.</p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label  htmlFor="name">First Name</Label>
              <Input 
           id="name"
                placeholder="John" 
                {...register("name", { required: "First name is required" })}
                className={errors.name ? "border-red-500 focus-visible:ring-red-500" : "bg-slate-50/50"}
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
             id="lastName"
                placeholder="Doe" 
                {...register("lastName", { required: "Last name is required" })}
                className={errors.lastName ? "border-red-500 focus-visible:ring-red-500" : "bg-slate-50/50"}
              />
              {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input 
            id="dob"
              type="date" 
              {...register("dob", { required: "Date of Birth is required" })}
              className={errors.dob ? "border-red-500" : "bg-slate-50/50"}
            />
            {errors.dob && <p className="text-xs text-red-500">{errors.dob.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
           id="email"
              type="email"
              placeholder="name@example.com" 
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email"
                }
              })}
              className={errors.email ? "border-red-500" : "bg-slate-50/50"}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>
        </CardContent>

        <CardFooter className="flex justify-end pt-4">
          <Button type="submit" className="px-8 bg-black hover:bg-black block">
            Continue to Next Step
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
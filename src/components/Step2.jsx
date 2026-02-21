
import React from 'react'
import { useForm, Controller } from "react-hook-form"; // Controller add kiya
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Select components

export const Step2 = ({ nextStep, prevStep,savedData,updateData }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: savedData
  });

  const onSubmit = (data) => {
   console.log(data);
   updateData(data);
    nextStep();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='p-4'>
      <Card className="max-w-lg mx-auto shadow-xl border-none ring-1 ring-slate-200">
        <CardHeader className="space-y-1">
          <p className="text-sm font-medium text-slate-600 uppercase tracking-wider">Step 2/3</p>
          <CardTitle className="text-2xl font-bold">Contact Info</CardTitle>
          <CardDescription>Where should we reach out to you?</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Phone Number */}
          <div className='space-y-2'>
            <Label htmlFor="number">Phone Number</Label>
            <Input id="number" placeholder="+92 300 0000000" {...register("number", { required: "Phone Number is required" })} />
            {errors.number && <p className='text-xs text-red-500'>{errors.number.message}</p>}
          </div>

          {/* Mailing Address */}
          <div className='space-y-2'>
            <Label htmlFor="address">Mailing Address</Label>
            <Input id="address" placeholder="Street Address" {...register("address", { required: "Street Address is required" })} />
            {errors.address && <p className='text-xs text-red-500'>{errors.address.message}</p>}
          </div>

          {/* Zip & State Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input id="zipCode" placeholder="Zip Code" {...register("zipCode", { required: "Required" })} />
              {errors.zipCode && <p className="text-xs text-red-500">{errors.zipCode.message}</p>}
            </div>

            {/* State Dropdown */}
            <div className="space-y-2">
              <Label>Province/State</Label>
              <Controller
                control={control}
                name="state"
                rules={{ required: "Select a state" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className={errors.state ? "border-red-500" : "bg-slate-50/50"}>
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="sindh">Sindh</SelectItem>
                      <SelectItem value="kpk">KPK</SelectItem>
                      <SelectItem value="balochistan">Balochistan</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.state && <p className="text-xs text-red-500">{errors.state.message}</p>}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between pt-4">
          <Button type="button" variant="ghost" onClick={prevStep}>
            Previous
          </Button>
          <Button type="submit" className="px-8 bg-black hover:bg-zinc-800 text-white transition-colors">
            Continue to Next Step
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
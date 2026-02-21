import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Card, CardHeader, CardFooter, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export const Step3 = ({ prevStep, updateData, savedData }) => {
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: savedData
    });

    const onSubmit = (data) => {
        updateData(data); 
        console.log("Final Form Submission Data:", { ...savedData, ...data });
        alert("🎉 Form submitted successfully!");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
            <Card className="max-w-lg mx-auto shadow-xl border-none ring-1 ring-slate-200">
                <CardHeader className="space-y-1">
                    <p className="text-sm font-medium text-slate-600 uppercase tracking-wider">Step 03/03</p>
                    <CardTitle className="text-2xl font-bold">Secure Info</CardTitle>
                    <CardDescription>Finalize your application with security details.</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    {/* Social Security Number */}
                    <div className='space-y-2'>
                        <Label htmlFor="ssn">Social Security Number</Label>
                        <Input 
                            id="ssn" 
                            type="password"
                            placeholder="000-00-0000" 
                            {...register("ssn", { 
                                required: "SSN is required",
                                pattern: { 
                                    value: /^\d{3}-\d{2}-\d{4}$|^\d{9}$/, 
                                    message: "Format: 000-00-0000" 
                                }
                            })} 
                            className={errors.ssn ? "border-red-500 bg-slate-50/50" : "bg-slate-50/50"}
                        />
                        {errors.ssn && <p className='text-xs text-red-500'>{errors.ssn.message}</p>}
                    </div>

                    {/* Proof of Identity Dropdown */}
                    <div className='space-y-2'>
                        <Label>Proof of Identity</Label>
                        <Controller
                            control={control}
                            name="identityType"
                            rules={{ required: "Please select an identity type" }}
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className={errors.identityType ? "border-red-500 bg-slate-50/50" : "bg-slate-50/50"}>
                                        <SelectValue placeholder="Select Document Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="passport">Passport</SelectItem>
                                        <SelectItem value="license">Driver's License</SelectItem>
                                        <SelectItem value="national_id">National ID Card</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.identityType && <p className="text-xs text-red-500">{errors.identityType.message}</p>}
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor="file">Upload Document Scan</Label>
                        <div className="flex flex-col gap-2">
                            <Input 
                                id="file" 
                                type="file" 
                                className="cursor-pointer bg-slate-50/50 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-200 file:text-slate-700 hover:file:bg-slate-300" 
                                {...register("document", { required: "Document scan is required" })}
                            />
                            {errors.document && <p className='text-xs text-red-500'>{errors.document.message}</p>}
                            <p className="text-[10px] text-slate-400 italic">Accepted formats: PDF, JPG, PNG (Max 5MB)</p>
                        </div>
                    </div>

                    {/* Terms & Conditions Checkbox */}
                    <div className="space-y-2">
                        <div className="flex items-center space-x-3 p-3 rounded-lg border border-slate-100 bg-slate-50/30">
                            <input 
                                type="checkbox" 
                                id="terms"
                                className="w-4 h-4 accent-black cursor-pointer"
                                {...register("terms", { required: "You must agree to the terms" })}
                            />
                            <Label htmlFor="terms" className="text-xs text-slate-600 leading-tight cursor-pointer">
                                I have read and agree to the <a href="#" className="text-blue-600 font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 font-semibold hover:underline">Privacy Policy</a>.
                            </Label>
                        </div>
                        {errors.terms && <p className="text-[10px] text-red-500 ml-1">{errors.terms.message}</p>}
                    </div>
                </CardContent>

                <CardFooter className="flex justify-between pt-6 border-t mt-4">
                    <Button type="button" variant="ghost" onClick={prevStep} className="hover:bg-slate-100">
                        Back
                    </Button>
                    <Button type="submit" className="px-10 bg-black hover:bg-zinc-800 text-white shadow-md transition-all active:scale-95">
                        Complete Submission
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
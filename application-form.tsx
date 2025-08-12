"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle, User, CreditCard, Shield, Check, Home } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1)
  const [nomineeChecked, setNomineeChecked] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    fullAddress: "",
    city: "",
    pinCode: "",
    adhaarNumber: "",
    panNumber: "",
    bankAccount: "",
    ifscCode: "",
    nomineeName: "",
    nomineeAadhaar: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep === 1) {
      setCurrentStep(2)
    } else {
      // Handle final submission
      console.log("Form submitted!", formData)
      setIsSubmitted(true)
    }
  }

  const handleBack = () => {
    setCurrentStep(1)
  }

  const handleReset = () => {
    setCurrentStep(1)
    setNomineeChecked(false)
    setIsSubmitted(false)
    setFormData({
      fullName: "",
      phoneNumber: "",
      fullAddress: "",
      city: "",
      pinCode: "",
      adhaarNumber: "",
      panNumber: "",
      bankAccount: "",
      ifscCode: "",
      nomineeName: "",
      nomineeAadhaar: ""
    })
  }

  const progress = (currentStep / 2) * 100

  // Success state
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for submitting your application. We'll review your information and get back to you soon.
            </p>
            <div className="space-y-3">
              <Button
                onClick={handleReset}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
              >
                Submit Another Application
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = '/'}
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 rounded-xl transition-all duration-200"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg sticky top-0 z-50">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">Application Form</h1>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm text-white/90 font-medium">Step {currentStep} of 2</span>
            </div>
          </div>
          <Progress value={progress} className="mt-3 h-1 bg-white/20" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Form Section - Below illustration for mobile, right side for desktop */}
        <div className="flex-1 bg-white lg:bg-transparent order-2 lg:order-2">
          <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-12 pb-20 lg:pb-12">
            {/* Desktop Progress */}
            <div className="hidden lg:block mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {currentStep === 1 ? "Personal Details" : "Financial & Identity Details"}
                </h2>
                <span className="text-sm text-gray-500">Step {currentStep} of 2</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                {/* Back button for step 2 */}
                {currentStep === 2 && (
                  <Button 
                    onClick={handleBack} 
                    variant="ghost" 
                    className="mb-6 p-2 hover:bg-gray-100 text-gray-600 group"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden sm:inline">Back to Personal Details</span>
                    <span className="sm:hidden">Back</span>
                  </Button>
                )}

                {currentStep === 1 ? (
                  <>
                    <div className="mb-6 lg:mb-8">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                        Personal Details
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Please provide your basic personal information to get started.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-gray-700 font-medium text-sm">
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            className="h-12 border-gray-200 bg-white rounded-lg focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 hover:border-gray-300"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phoneNumber" className="text-gray-700 font-medium text-sm">
                            Phone Number *
                          </Label>
                          <Input
                            id="phoneNumber"
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                            className="h-12 border-gray-200 bg-white rounded-lg focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 hover:border-gray-300"
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="fullAddress" className="text-gray-700 font-medium text-sm">
                          Full Address *
                        </Label>
                        <Textarea
                          id="fullAddress"
                          value={formData.fullAddress}
                          onChange={(e) => handleInputChange('fullAddress', e.target.value)}
                          className="min-h-[100px] border-gray-200 bg-white rounded-lg resize-none focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 hover:border-gray-300"
                          placeholder="Enter your complete address"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city" className="text-gray-700 font-medium text-sm">
                            City *
                          </Label>
                          <Input
                            id="city"
                            type="text"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            className="h-12 border-gray-200 bg-white rounded-lg focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 hover:border-gray-300"
                            placeholder="Enter your city"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pinCode" className="text-gray-700 font-medium text-sm">
                            Pin Code *
                          </Label>
                          <Input
                            id="pinCode"
                            type="text"
                            value={formData.pinCode}
                            onChange={(e) => handleInputChange('pinCode', e.target.value)}
                            className="h-12 border-gray-200 bg-white rounded-lg focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 hover:border-gray-300"
                            placeholder="Enter pin code"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 rounded-xl text-lg mt-6 sm:mt-8 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        <span className="hidden sm:inline">Continue to Financial Details</span>
                        <span className="sm:hidden">Continue</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </>
                ) : (
                  <>
                    <div className="mb-6 lg:mb-8">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                        Financial & Identity Details
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Please provide your banking and identity information for verification.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="adhaarNumber" className="text-gray-700 font-medium text-sm">
                            Aadhaar Number *
                          </Label>
                          <Input
                            id="adhaarNumber"
                            type="text"
                            value={formData.adhaarNumber}
                            onChange={(e) => handleInputChange('adhaarNumber', e.target.value)}
                            className="h-12 border-gray-200 bg-white rounded-lg focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 hover:border-gray-300"
                            placeholder="XXXX-XXXX-XXXX"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="panNumber" className="text-gray-700 font-medium text-sm">
                            PAN Number *
                          </Label>
                          <Input
                            id="panNumber"
                            type="text"
                            value={formData.panNumber}
                            onChange={(e) => handleInputChange('panNumber', e.target.value)}
                            className="h-12 border-gray-200 bg-white rounded-lg focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 hover:border-gray-300"
                            placeholder="ABCDE1234F"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="bankAccount" className="text-gray-700 font-medium text-sm">
                            Bank Account Number *
                          </Label>
                          <Input
                            id="bankAccount"
                            type="text"
                            value={formData.bankAccount}
                            onChange={(e) => handleInputChange('bankAccount', e.target.value)}
                            className="h-12 border-gray-200 bg-white rounded-lg focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 hover:border-gray-300"
                            placeholder="Enter account number"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ifscCode" className="text-gray-700 font-medium text-sm">
                            IFSC Code *
                          </Label>
                          <Input
                            id="ifscCode"
                            type="text"
                            value={formData.ifscCode}
                            onChange={(e) => handleInputChange('ifscCode', e.target.value)}
                            className="h-12 border-gray-200 bg-white rounded-lg focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 hover:border-gray-300"
                            placeholder="ABCD0001234"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-emerald-500" />
                          <h4 className="text-lg sm:text-xl font-bold text-gray-800">Nominee Details</h4>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                            <Checkbox
                              id="nominee"
                              checked={nomineeChecked}
                              onCheckedChange={(checked) => setNomineeChecked(checked === true)}
                              className="border-gray-300 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                            />
                            <Label htmlFor="nominee" className="text-gray-700 font-medium cursor-pointer text-sm sm:text-base">
                              I want to add a nominee for my account
                            </Label>
                          </div>
                        </div>

                        {nomineeChecked && (
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                            <div className="space-y-2">
                              <Label htmlFor="nomineeName" className="text-gray-700 font-medium text-sm">
                                Nominee Name *
                              </Label>
                              <Input
                                id="nomineeName"
                                type="text"
                                value={formData.nomineeName}
                                onChange={(e) => handleInputChange('nomineeName', e.target.value)}
                                className="h-12 border-gray-200 bg-white rounded-lg focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 hover:border-gray-300"
                                placeholder="Enter nominee name"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="nomineeAadhaar" className="text-gray-700 font-medium text-sm">
                                Nominee Aadhaar No *
                              </Label>
                              <Input
                                id="nomineeAadhaar"
                                type="text"
                                value={formData.nomineeAadhaar}
                                onChange={(e) => handleInputChange('nomineeAadhaar', e.target.value)}
                                className="h-12 border-gray-200 bg-white rounded-lg focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-200 hover:border-gray-300"
                                placeholder="XXXX-XXXX-XXXX"
                                required
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 rounded-xl text-lg mt-6 sm:mt-8 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] group"
                      >
                        <span className="hidden sm:inline">Submit Application</span>
                        <span className="sm:hidden">Submit</span>
                        <CheckCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile Illustration Section - On top for mobile only */}
        <div className="flex-1 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 relative overflow-hidden order-1 lg:hidden">
          {/* Curved separator at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-white transform translate-y-4">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 Q50,100 100,0 L100,0 L0,0 Z" fill="white"/>
            </svg>
          </div>
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 flex flex-col w-full h-full">
            {/* Header */}
            <div className="p-6 text-center">
              <h1 className="text-white text-3xl font-bold leading-tight mb-2">
                Application Form
              </h1>
              <p className="text-white/90 text-base max-w-md mx-auto">
                Complete your application in just a few simple steps.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="px-6 mb-6">
              <div className="flex items-center space-x-4">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= 1 ? 'bg-white text-emerald-600 border-white shadow-lg' : 'border-white/30 text-white'
                }`}>
                  {currentStep > 1 ? <CheckCircle className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium text-sm">Personal Details</div>
                  <div className="text-white/70 text-xs">Basic information</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-3">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= 2 ? 'bg-white text-emerald-600 border-white shadow-lg' : 'border-white/30 text-white'
                }`}>
                  {currentStep > 2 ? <CheckCircle className="w-4 h-4" /> : <CreditCard className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium text-sm">Financial Details</div>
                  <div className="text-white/70 text-xs">Banking & identity</div>
                </div>
              </div>
            </div>

            {/* Main illustration */}
            <div className="flex-1 flex items-center justify-center px-6 pb-6">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/illustration.png"
                  alt="Two people interacting with a mobile application interface"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  
                  onError={(e) => {
                    console.error('Failed to load mobile illustration image');
                  }}
                />
              </div>
            </div>

            {/* Plant decoration */}
            <div className="absolute bottom-4 right-4">
              <Image
                src="/plant-decoration.png"
                alt="Decorative plant element"
                width={40}
                height={120}
                className="opacity-80 drop-shadow-lg"
                
              />
            </div>
          </div>
        </div>

        {/* Desktop Illustration Section - Left side for desktop */}
        <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 relative overflow-hidden order-2 lg:order-1">
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 flex flex-col w-full">
            {/* Header */}
            <div className="p-8">
              <h1 className="text-white text-5xl font-bold leading-tight mb-2">
                Application
                <br />
                Form
              </h1>
              <p className="text-white/90 text-lg max-w-md">
                Complete your application in just a few simple steps. We'll guide you through the process.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="px-8 mb-8">
              <div className="flex items-center space-x-4">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= 1 ? 'bg-white text-emerald-600 border-white shadow-lg' : 'border-white/30 text-white'
                }`}>
                  {currentStep > 1 ? <CheckCircle className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">Personal Details</div>
                  <div className="text-white/70 text-sm">Basic information</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-4">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= 2 ? 'bg-white text-emerald-600 border-white shadow-lg' : 'border-white/30 text-white'
                }`}>
                  {currentStep > 2 ? <CheckCircle className="w-5 h-5" /> : <CreditCard className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">Financial Details</div>
                  <div className="text-white/70 text-sm">Banking & identity</div>
                </div>
              </div>
            </div>

            {/* Main illustration */}
            <div className="flex-1 flex items-center justify-center px-8 pb-8">
              <div className="relative w-full max-w-md">
                <Image
                  src="/illustration.png"
                  alt="Two people interacting with a mobile application interface"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain drop-shadow-2xl"
        
                  onError={(e) => {
                    console.error('Failed to load illustration image');
                  }}
                />
              </div>
            </div>

            {/* Plant decoration */}
            <div className="absolute bottom-8 left-8">
              <Image
                src="/plant-decoration.png"
                alt="Decorative plant element"
                width={60}
                height={200}
                className="opacity-80 drop-shadow-lg"
                
              />
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

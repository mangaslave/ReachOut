"use client";
import React, {FormEvent, useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {createJobPosting} from "@/actions/CreateJobListingAction";
import {useRouter} from "next/navigation";

interface FormData {
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string;
  benefits: string;
}

export function CreateJobListingClient() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    location: "",
    type: "",
    salary: "",
    description: "",
    requirements: "",
    benefits: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const salaryNumber = parseInt(formData.salary.replace(/[^0-9]/g, ""));
      const skills: number[] = [];
      const benefits: number[] = [];

      const jobTypeMap: Record<string, number> = {
        "full-time": 1,
        "part-time": 2,
        contract: 3,
        remote: 4,
      };

      const jobTypeId = jobTypeMap[formData.type];

      await createJobPosting({
        title: formData.title,
        description: formData.description,
        jobTypeId,
        salary: salaryNumber,
        location: formData.location,
        skills,
        benefits,
      });

      router.refresh();
    } catch (error) {
      console.error("Error creating job posting:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create Job Listing</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              placeholder="e.g. General Labour"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="e.g. Vancouver, BC"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Employment Type</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary">Hourly Rate</Label>
            <Input
              id="salary"
              placeholder="e.g. $25-28"
              type="number"
              value={formData.salary}
              onChange={(e) => setFormData({...formData, salary: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              placeholder="Enter job description..."
              className="h-32"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Requirements</Label>
            <Textarea
              id="requirements"
              placeholder="Enter job requirements..."
              className="h-32"
              value={formData.requirements}
              onChange={(e) => setFormData({...formData, requirements: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="benefits">Benefits</Label>
            <Textarea
              id="benefits"
              placeholder="Enter job benefits..."
              className="h-32"
              value={formData.benefits}
              onChange={(e) => setFormData({...formData, benefits: e.target.value})}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Job Listing"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

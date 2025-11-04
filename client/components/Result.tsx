"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Container from "./ui/Component";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { FormEvent, useState } from "react";
import axios from "axios";
import { StudentResult } from "@/type";
import { serverUrl } from "@/utils/config";
import { Loader2 } from "lucide-react";

const Result = () => {
  const [roll, setRoll] = useState<string>("");
  const [studentClass, setStudentClass] = useState<string>("");
  const [section, setSection] = useState<string>("");
  const [result, setResult] = useState<StudentResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.get(`${serverUrl}/api/result/search`, {
        // withCredentials: true,
        params: {
          roll,
          class: studentClass,
          section,
        },
      });

      const data = res.data.data;
      setResult(data);
    } catch (error) {
      console.log("Result not found!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container className="flex items-center justify-center py-10">
      {result ? (
        <Card className="w-full max-w-xl">
          <CardHeader>
            <CardTitle className="flex  items-center justify-center">
              <p className="text-base text-center">
                Chilahati Merchant's High School Annual Result 2025.
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4 ">
              <div className="bg-[#eeeeee] flex items-center p-2 ">
                <p className="text-sm">Name :</p>
                <p className="text-sm mx-2">{result?.name}</p>
              </div>
              <div className="bg-[#eeeeee] flex items-center p-2">
                <p className="text-sm">Roll No :</p>
                <p className="text-sm mx-2">{result?.roll}</p>
              </div>
              <div className="bg-[#eeeeee] flex items-center p-2 ">
                <p className="text-sm">Class :</p>
                <p className="text-sm mx-2">{result?.class}</p>
              </div>
              <div className="bg-[#eeeeee] flex items-center p-2 ">
                <p className="text-sm">Group :</p>
                <p className="text-sm mx-2">{result?.section}</p>
              </div>
              <div className="bg-[#eeeeee] flex items-center p-2 ">
                <p className="text-sm">Result :</p>
                <p className="text-sm mx-2">{result?.result}</p>
              </div>
              <div className="bg-[#eeeeee] flex items-center p-2 ">
                <p className="text-sm">GPA :</p>
                <p className="text-sm mx-2">{result?.gpa}</p>
              </div>
              <div className="bg-[#eeeeee] col-span-2 flex items-center p-2 ">
                <p className="text-xs md:text-sm">Institute :</p>
                <p className="text-xs md:text-sm mx-2">
                  Chilahati Merchant's High School
                </p>
              </div>
            </div>

            <div className="mt-7">
              <h2 className="text-center text-lg mb-5 font-semibold">
                Grade Sheet
              </h2>
              <div className="w-full bg-[#afb7be] flex items-center justify-between px-4 py-1">
                <p className="text-sm text-black font-bold">Code</p>
                <p className="text-sm text-black font-bold">Subjects</p>
                <p className="text-sm text-black font-bold">Marks</p>
              </div>
              <div>
                {result?.subjects.map((item, index) => (
                  <div
                    key={item._id}
                    className={`flex items-center justify-between px-4 py-1 ${
                      index % 2 === 0 ? "bg-[#eeeeee]" : "bg-gray-300"
                    }`}
                  >
                    <p className="text-sm ">{item?.code}</p>
                    <p className="text-sm text-start">{item?.name}</p>
                    <p className="text-sm">{item?.mark}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-center">
            <Button
              className="bg-transparent text-blue-600  text-center hover:bg-transparent hover:text-red-500"
              onClick={() => window.location.reload()}
            >
              Search again
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="w-full max-w-md ">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <p className="text-sm md:text-base text-center">
                Chilahati Merchant's High School Annual Result 2025.
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="w-32">
                    <Label htmlFor="exam">Examination</Label>
                  </div>
                  <p className="mx-2 hidden md:inline-flex">:</p>
                  <Input
                    id="exam"
                    type="text"
                    placeholder="Annual Result"
                    readOnly
                    className="focus-visible:ring-0 placeholder:text-black"
                    disabled={loading}
                  />
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="w-32">
                    <Label htmlFor="year">Year</Label>
                  </div>
                  <p className="mx-2 hidden md:inline-flex">:</p>
                  <Input
                    id="year"
                    type="text"
                    placeholder="2025"
                    readOnly
                    className="focus-visible:ring-0 placeholder:text-black"
                    disabled={loading}
                  />
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="w-32">
                    <Label htmlFor="roll">Roll</Label>
                  </div>
                  <p className="mx-2 hidden md:inline-flex">:</p>
                  <Input
                    id="roll"
                    type="number"
                    placeholder="Enter your roll"
                    value={roll}
                    onChange={(e) => setRoll(e.target.value)}
                    disabled={loading}
                    required
                    className="focus-visible:ring-0 no-spinner"
                  />
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center  gap-4">
                  <div className="w-32">
                    <Label htmlFor="class">Class</Label>
                  </div>
                  <p className="mx-2 hidden md:inline-flex">:</p>
                  <Select
                    value={studentClass}
                    onValueChange={(value) => setStudentClass(value)}
                    disabled={loading}
                  >
                    <SelectTrigger className="w-full cursor-pointer  focus-visible:ring-0">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">Class-6</SelectItem>
                      <SelectItem value="7">Class-7</SelectItem>
                      <SelectItem value="8">Class-8</SelectItem>
                      <SelectItem value="9">Class-9</SelectItem>
                      <SelectItem value="10">Class-10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="w-32">
                    <Label htmlFor="section">Section</Label>
                  </div>
                  <p className="mx-2 hidden md:inline-flex">:</p>
                  <Select
                    value={section}
                    onValueChange={(value) => setSection(value)}
                    disabled={loading}
                  >
                    <SelectTrigger className="w-full cursor-pointer  focus-visible:ring-0">
                      <SelectValue placeholder="Select section/group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a">A</SelectItem>
                      <SelectItem value="b">B</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="commerce">Commerce</SelectItem>
                      <SelectItem value="arts">Arts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-10">
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="mt-1 animate-spin" />
                      <p>Loading...</p>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Result;

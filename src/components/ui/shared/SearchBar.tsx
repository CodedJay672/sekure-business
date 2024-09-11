"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import * as z from 'zod';
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { searchSchema } from "@/validation";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: '',
    }
  });

  const onSubmit = async (values: z.infer<typeof searchSchema>) => {
    // get the params from the url
    const params = new URLSearchParams(searchParams);
    if (values.query){
      values.query.length > 2 && params.set('q', values.query);
    } else {
      params.delete('q');
    }

    // replace the link in the location bar to take the search query
    replace(`${pathname}?${params}`);

    // reset form field after submitting the form
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full"
      >
        <FormField
        control={form.control}
        name="query"
        render={({ field }) => (
          <FormItem>
            <FormControl className="border-none bg-transparent">
              <div className="flex-1 flex-center relative">
                <Input
                  type="text"
                  placeholder={placeholder}
                  className="w-full h-8 rounded-[5px] border-none outline-none px-10 pr-12 py-3 input bg-input"
                  {...field}
                  />
                <RiSearchLine size={20} color="#A5A5A5" className="absolute top-1 left-4 mt-[2px]"/>
                <Image
                  src="/assets/images/send.png"
                  alt="search"
                  width={13}
                  height={14}
                  className="absolute top-2 right-4 mt-[2px] cursor-pointer"
                  onClick={() => form.handleSubmit(onSubmit)()}
                />
              </div>
            </FormControl>
          </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default SearchBar;
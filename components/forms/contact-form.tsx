"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { Briefcase } from "lucide-react";
const formSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email({ message: "Please enter a valid Email Address" }),
  message: z.string().min(1, { message: "Please Enter Your Message" }),
});
export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        className="p-8 pb-0 md:p-12 flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h3 className="text-accent-foreground font-bold text-3xl">
          Get Free Quote
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas
          etiam. Erat mauris posuere dui sed faucibus placerat euismod.
        </p>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-accent border border-muted placeholder:text-accent-foreground text-accent-foreground rounded-none"
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage className="text-red-200" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-0 w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-accent border border-muted placeholder:text-accent-foreground text-accent-foreground rounded-none"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage className="text-red-200" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="space-y-0 w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-accent border border-muted placeholder:text-accent-foreground text-accent-foreground rounded-none"
                    placeholder="Name"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage className="text-red-200" />
              </FormItem>
            )}
          />
          <Button className="bg-secondary text-accent-foreground hover:text-accent gap-2.5">
            <span>Get a Quote</span>
            <Briefcase height={12} width={12} />
          </Button>
        </div>
      </form>
    </Form>
  );
}

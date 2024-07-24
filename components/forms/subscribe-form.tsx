"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
const formSchema = z.object({
  email: z.string().email({ message: "Please Enter Valid Email Address" }),
});
export default function SubscribeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-2.5 flex-1"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel />
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
        <Button className="bg-secondary text-accent-foreground hover:text-accent gap-2.5">
          <span>Sign Up</span>
          <Mail width={12} height={12} />
        </Button>
      </form>
    </Form>
  );
}

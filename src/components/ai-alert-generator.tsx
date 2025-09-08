"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAiTechAlert } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Wand2, Zap, AlertTriangle } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const formSchema = z.object({
  query: z.string().min(2, "Query must be at least 2 characters."),
});

export default function AiAlertGenerator() {
  const [alert, setAlert] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "latest trends in full-stack development",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setAlert(null);

    const result = await getAiTechAlert(values);

    if (result.success && result.data) {
      setAlert(result.data.alert);
    } else {
      setError(result.error || "An unknown error occurred.");
    }

    setIsLoading(false);
  }

  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Wand2 className="size-6 text-primary" />
          </div>
          <div>
            <CardTitle className="font-headline">Generate AI Alert</CardTitle>
            <CardDescription>
              Get concise alerts on new AI tech and trends.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Query</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 'Advancements in React server components'" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Zap className="mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2" />
                  Generate
                </>
              )}
            </Button>
          </form>
        </Form>
        <div className="mt-6">
          {isLoading && (
            <div className="space-y-2">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          )}
          {error && (
            <div className="flex items-center gap-3 rounded-lg border border-destructive bg-destructive/10 p-4 text-destructive">
              <AlertTriangle />
              <p>{error}</p>
            </div>
          )}
          {alert && (
            <div className="rounded-lg border border-primary/50 bg-primary/10 p-4">
              <p className="font-medium text-foreground">{alert}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

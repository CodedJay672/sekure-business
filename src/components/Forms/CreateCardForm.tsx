"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { cardCreateSchema } from "../../validation";
import ButtonIconRight from "../ui/shared/ButtonIconRight";
import { ArrowRightIcon } from "lucide-react";
import { Input } from "../ui/input";
import DetailsTag from "../ui/shared/DetailsTag";


const CreateCardForm = ({ btnText}: { btnText: string }) => {
  const form = useForm<z.infer<typeof cardCreateSchema>>({
    resolver: zodResolver(cardCreateSchema),
  })

  function onSubmit(values: z.infer<typeof cardCreateSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="cardType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="labels">Type de carte</FormLabel>
              <FormControl>
                <div className="w-full rounded-[7px]">
                  <Input
                    placeholder="VISA 1"
                    {...field}
                    className="input w-full bg-notif"
                  />
                  <span className="text-[8px] font-normal leading-6 text-placeholder-text">Ideake pour les paiements sur Alibab et Netflix, taux du dollars à 685 Fcfa</span>
                </div>
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="labels">Mail de l’utilisateur</FormLabel>
              <FormControl className="flex-between w-full bg-notif pr-3 rounded-[7px]">
                <Input
                  placeholder="user@mail.com"
                  {...field}
                  className="input bg-notif w-full"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal leading-6 text-red-700" />
            </FormItem>
          )}
        />

        <div className="mb-44 flex gap-2">
          <DetailsTag data={{ key: 'Montant debité', value: '51 500 XAF' }} />
        </div>

        <ButtonIconRight
          variant="primary"
          type="submit"
          text={btnText}
          icon={<ArrowRightIcon size={10} color="#fff" />}
          handleClick={onSubmit}
        />
      </form>
    </Form>
  )
}

export default CreateCardForm;
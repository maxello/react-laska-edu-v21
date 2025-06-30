import { z } from 'zod';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';

const subscribeFormSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type SubscribeForm = z.infer<typeof subscribeFormSchema>

const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }} = useForm<SubscribeForm>({
    resolver: zodResolver(subscribeFormSchema)
  })

  const onSubmit = (data: SubscribeForm) => {
    const result = subscribeFormSchema.safeParse(data);
    if (result.success) {
      // handle success
      reset();
    } else {
      // handle error
    }
  }

  return (
    <form onSubmit={handleSubmit((d) => onSubmit(d))} className="flex flex-col w-full gap-2 mx-auto max-w-[400px]">
      <div className="flex gap-2 w-full justify-center">
        <input {...register('email')} type="email" placeholder="Email" className="text-sm sm:text-base w-full px-3 py-2 sm:px-5 sm:py-3 border border-primary outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none" />
        <button className="border-primary bg-primary transition-colors px-3 py-3 sm:px-5 sm:py-3 text-primary-foreground cursor-pointer disabled:cursor-not-allowed text-sm sm:text-base" type="submit">
          Subscribe
        </button>
      </div>
      <div className="text-left text-sm text-primary">
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>
    </form>
  )
}

export default SubscribeForm
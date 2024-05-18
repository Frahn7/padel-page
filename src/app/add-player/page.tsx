"use client";

export default function AddPlayer() {
  //   const formSchema = z.object({
  //     name: z
  //       .string()
  //       .min(2, {
  //         message: "minimo 2",
  //       })
  //       .max(50),
  //     site: z
  //       .string()
  //       .min(2, {
  //         message: "minimo 2",
  //       })
  //       .max(50),
  //     racket: z
  //       .string()
  //       .min(2, {
  //         message: "minimo 2",
  //       })
  //       .max(50),
  //     height: z
  //       .string()
  //       .min(2, {
  //         message: "minimo 2",
  //       })
  //       .max(20),
  //     points: z
  //       .string()
  //       .min(1, {
  //         message: "minimo 2",
  //       })
  //       .max(10),
  //     wins: z
  //       .string()
  //       .min(2, {
  //         message: "minimo 2",
  //       })
  //       .max(50),
  //     type: z
  //       .string()
  //       .min(2, {
  //         message: "minimo 2",
  //       })
  //       .max(50),
  //   });

  //   const form = useForm<z.infer<typeof formSchema>>({
  //     resolver: zodResolver(formSchema),
  //     defaultValues: {
  //       name: "",
  //       height: "",
  //       points: "",
  //       racket: "",
  //       site: "",
  //       type: "",
  //       wins: "",
  //     },
  //   });

  //   function onSubmit(values: z.infer<typeof formSchema>) {
  //     console.log(values);
  //   }

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex items-center"></div>
    </div>
  );
}

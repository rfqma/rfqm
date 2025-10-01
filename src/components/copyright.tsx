import Link from "next/link";

const Copyright = () => {
  return (
    <section className="flex flex-col md:max-w-[150px] w-full md:w-fit items-end md:items-start justify-end">
      <h2 className="text-xs font-normal">
        &copy; 2025 COPYRIGHT BY{" "}
        <Link
          href={"https://github.com/rfqma"}
          target="_blank"
          className="hover:underline"
        >
          RIFQI MAULANA
        </Link>
      </h2>
    </section>
  );
};

export default Copyright;

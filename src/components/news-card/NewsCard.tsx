import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NewsCardProps {
  data: {
    id: number;
    title: string;
    content: string;
    imagePath: string;
    date: string;
  };
}

const NewsCard = ({ data }: NewsCardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`faaliyetler/${data.id}`)}
      className="card card-compact min-w-76 h-auto lg:h-[600px] w-auto bg-base-300 shadow-xl hover:scale-[102%] transition-transform hover:cursor-pointer"
    >
      <figure className="lg:h-2/3">
        <Image
          src={`/assets/haberler/${data.imagePath}`}
          alt={`Haber-${data.id}`}
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body flex flex-col justify-between h-1/3">
        <h2 className="card-title text-neutral">{data.title}</h2>
        <div className="card-actions justify-end">
          <Link
            href={`/faaliyetler/${data.id}`}
            className="btn btn-link text-lg text-secondary btn-primary hover:scale-105"
          >
            Devamı
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

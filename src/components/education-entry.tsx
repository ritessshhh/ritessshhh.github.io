import Image from "next/image";
import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row gap-6">
        {education.imageUrl ? (
          <div className="w-1/4 min-w-[100px] max-w-[120px] relative">
            <Image
              src={education.imageUrl}
              alt={education.institution}
              width={120}
              height={120}
              className="rounded-lg object-contain"
            />
          </div>
        ) : (
          <div className="w-1/4 min-w-[100px] max-w-[120px] relative flex items-center justify-center bg-zinc-50 rounded-lg">
            <span className="text-xs text-zinc-400">No Image</span>
          </div>
        )}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-base font-serif font-medium">
              {education.institution}
            </h3>
            <span className="text-xs text-zinc-500 whitespace-nowrap ml-4">
              {education.year}
            </span>
          </div>
          <p className="text-sm text-zinc-600 mb-2">{education.degree}</p>
          {education.advisor && (
            <p
              className="text-sm text-zinc-500 italic [&_a]:underline [&_a]:hover:text-stanford-red [&_a]:transition-colors"
              dangerouslySetInnerHTML={{ __html: `Advisor: ${education.advisor}` }}
            />
          )}
          {education.thesis && (
            <p className="text-sm text-zinc-500 mt-1 italic">
              Thesis:{" "}
              {education.thesisUrl ? (
                <a
                  href={education.thesisUrl}
                  className="hover:underline hover:text-stanford-red transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {education.thesis}
                </a>
              ) : (
                education.thesis
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

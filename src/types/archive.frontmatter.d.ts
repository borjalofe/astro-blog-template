import type { Collection } from '@/types/collections.d';
import type { CommonFrontmatter } from "@/types/common.frontmatter";

export type ArchiveFrontmatter = CommonFrontmatter & {
    collection: Collection;
}
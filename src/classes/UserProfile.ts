import type { UserProfile as APIUserProfile } from "stoat-api";

import type { Client } from "../Client.js";

import { File } from "./File.js";

/**
 * User Profile Class
 */
export class UserProfile {
  readonly content?: string;
  readonly banner?: File;
  readonly trophies?: Array<{
    id: string;
    title: string;
    description?: string;
    icon?: string;
    date?: string;
  }>;

  /**
   * Construct Public Bot
   * @param client Client
   * @param data Data
   */
  constructor(client: Client, data: APIUserProfile) {
    this.content = data.content!;
    this.banner = data.background
      ? new File(client, data.background)
      : undefined;
    this.trophies = (data as any).trophies;
  }

  /**
   * URL to the user's banner
   */
  get bannerURL(): string | undefined {
    return this.banner?.createFileURL();
  }

  /**
   * URL to the user's animated banner
   */
  get animatedBannerURL(): string | undefined {
    return this.banner?.createFileURL(true);
  }
}

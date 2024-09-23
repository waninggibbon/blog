import {
  CircleHelp,
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Moon,
  Plus,
  PlusCircle,
  Settings,
  Shuffle,
  Sun,
  User,
  UserPlus,
  Users,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const SiteSettings = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Settings className="m500:h-4 m500:w-4 stroke-text h-6 w-6 align-middle" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Site settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Display preference</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Wrench className="mr-2 h-4 w-4" />
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Theme</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-goblin rounded-full" />
                  <span>Goblin</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-paladin rounded-full" />
                  <span>Paladin</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-necromancer rounded-full" />
                  <span>Necromancer</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-tiefling rounded-full" />
                  <span>Tiefling</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-pumpkin rounded-full" />
                  <span>Pumpkin</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Shuffle className="mr-2 h-4 w-4" />
                  <span>Random</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Close</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

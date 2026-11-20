import {
  Monitor,
  Settings,
  Wifi,
  Router,
  Smartphone,
  Radio,
  Gauge,
  RefreshCw,
  Cable,
  Heart,
  MessageSquare,
  BookOpen,
  Shield,
  Layout,
  ShoppingCart,
  TrendingUp,
  GraduationCap,
  Network,
  Cpu,
  Award,
  PartyPopper,
  type LucideProps,
} from 'lucide-react';
import type { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Monitor,
  Settings,
  Wifi,
  Router,
  Smartphone,
  Radio,
  Gauge,
  RefreshCw,
  Cable,
  Heart,
  MessageSquare,
  BookOpen,
  Shield,
  Layout,
  ShoppingCart,
  TrendingUp,
  GraduationCap,
  Network,
  Cpu,
  Award,
  PartyPopper,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = iconMap[name] || Monitor;
  return <Icon {...props} />;
}

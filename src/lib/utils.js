/**
 * Utility function to cleanly join class names conditionally
 * without requiring external dependencies.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

package cmd

import (
	"devhacks/pkg/pocketbase"

	"github.com/spf13/cobra"
)

var generateCmd = &cobra.Command{
	Use:   "generate",
	Short: "Generate dummy data",
	RunE: func(cmd *cobra.Command, args []string) error {
		return pocketbase.AddExhibits()
	},
}

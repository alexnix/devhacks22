package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

var generateCmd = &cobra.Command{
	Use:   "generate",
	Short: "Generate dummy data",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("generate called")
	},
}

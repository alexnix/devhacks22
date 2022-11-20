package cmd

import (
	"log"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/models"
	"github.com/pocketbase/pocketbase/models/schema"
	"github.com/spf13/cobra"
)

var serveCmd = &cobra.Command{
	Use:   "serve",
	Short: "Serve pocketbase",
	Run: func(cmd *cobra.Command, args []string) {
		app := pocketbase.New()

		if err := app.Bootstrap(); err != nil {
			log.Fatal(err)
		}

		app.OnBeforeServe().Add(func(e *core.ServeEvent) error {

			if _, err := e.App.Dao().FindCollectionByNameOrId("exhibits"); err != nil {
				exhibits_collection := &models.Collection{
					Name: "exhibits",
					Schema: schema.NewSchema(
						&schema.SchemaField{
							Name:     "name",
							Required: true,
							Type:     schema.FieldTypeText,
						},
						&schema.SchemaField{
							Name:     "description",
							Required: true,
							Type:     schema.FieldTypeText,
						},
						&schema.SchemaField{
							Name:     "clusterID",
							Required: true,
							Type:     schema.FieldTypeText,
						},
						&schema.SchemaField{
							Name:     "img",
							Required: true,
							Type:     schema.FieldTypeText,
						},
						&schema.SchemaField{
							Name: "engagementScore",
							Type: schema.FieldTypeText,
						},
					),
				}
				e.App.Dao().SaveCollection(exhibits_collection)
			}

			if _, err := e.App.Dao().FindCollectionByNameOrId("view_entries"); err != nil {
				views_entries := &models.Collection{
					Name: "view_entries",
					Schema: schema.NewSchema(
						&schema.SchemaField{
							Name:     "userID",
							Required: true,
							Type:     schema.FieldTypeText,
						},
						&schema.SchemaField{
							Name:     "exhibitID",
							Required: true,
							Type:     schema.FieldTypeText,
						},
						&schema.SchemaField{
							Name:     "time",
							Required: true,
							Type:     schema.FieldTypeText,
						},
						&schema.SchemaField{
							Name:     "like",
							Required: true,
							Type:     schema.FieldTypeText,
						},
					),
				}
				e.App.Dao().SaveCollection(views_entries)
			}
			return nil
		})

		if err := app.Start(); err != nil {
			log.Fatal(err)
		}
	}}
